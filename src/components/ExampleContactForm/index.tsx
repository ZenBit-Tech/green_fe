import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "./styles.scss";

type FormData = {
  name: string;
  email: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { t } = useTranslation();

  const onSubmit = (data: FormData) => {
    alert(`${t("form.name")}: ${data.name}\n${t("form.email")}: ${data.email}`);
    reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>{t("form.name")}</label>
        <input
          type="text"
          {...register("name", { required: t("form.errors.nameRequired") })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label>{t("form.email")}</label>
        <input
          type="email"
          {...register("email", {
            required: t("form.errors.emailRequired"),
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: t("form.errors.emailInvalid"),
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <button type="submit" className="submit-btn">
        {t("form.submit")}
      </button>
    </form>
  );
}

export default Form;
