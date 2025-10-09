import { useState, useCallback } from "react";

const MAGIC_LINK_ENDPOINT = `${import.meta.env.VITE_API_BASE_URL}/auth/magic-link/request`;

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const useSignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<{
    key: string;
    params?: { message: string };
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (error) setError(null);
    },
    [error],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSuccess(false);

      if (!validateEmail(email)) {
        setError({ key: "signIn.errorInvalidEmail" });
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(MAGIC_LINK_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          setError({
            key: "signIn.errorFromServer",
            params: { message: errorMessage },
          });
          return;
        }

        const data = await response.json();
        if (data.success === true) {
          setIsSuccess(true);
        }
      } catch (error) {
        console.error("Network error:", error);
        setError({ key: "signIn.errorNetwork" });
      } finally {
        setIsLoading(false);
      }
    },
    [email],
  );

  return {
    email,
    error,
    isLoading,
    isSuccess,
    handleEmailChange,
    handleSubmit,
  };
};
