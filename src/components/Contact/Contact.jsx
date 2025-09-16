import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { myEmail, myPhone, myLocation } from "../../constants";


function StatCard({ value, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center p-4 bg-gradient-dark-card/50 rounded-xl border border-color-primary/20 backdrop-blur-sm shadow-md"
    >
      <div className="text-xl font-bold text-color-primary mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
}



function InputField({ label, name, type = "text", value, onChange, placeholder, textarea = false, maxLength }) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-2">{label} *</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows="5"
          maxLength={maxLength}
          required
          className="w-full p-4 rounded-xl bg-[#131025] text-white border-2 border-gray-600 hover:border-gray-500 focus:border-color-primary focus:ring-2 focus:ring-color-primary/30 transition-all resize-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full p-4 rounded-xl bg-[#131025] text-white border-2 border-gray-600 hover:border-gray-500 focus:border-color-primary focus:ring-2 focus:ring-color-primary/30 transition-all"
          placeholder={placeholder}
        />
      )}
      {textarea && (
        <div className="absolute bottom-3 right-3 text-xs text-gray-500">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
}

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: "",
  });

  const stats = [
    { value: "< 24h", label: t("contact.responseTime") },
    { value: "100%", label: t("contact.satisfaction") },
    { value: "✔", label: t("contact.availability") },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_4q88xed",
        "template_0piaiqq",
        form.current,
        "R4WKVL_7m2xTEjuZP"
      )
      .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          form.current.reset();
          setFormData({ user_email: "", user_name: "", subject: "", message: "" });

          toast.success(t("contact.sucessMessage"), {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
            style: {
              background: "linear-gradient(135deg, #8245ec, #a855f7)",
              border: "1px solid rgba(130, 69, 236, 0.3)",
            },
          });
        },
        (error) => {
          setIsLoading(false);
          console.error("Error sending message:", error);
          toast.error(t("contact.errorMessage"), {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        }
      );
  };

    const contactDetails = [
      {
        icon: <FaMapMarkerAlt className="text-color-primary text-xl" />,
        title: t("contact.myLocation"),
        value: myLocation,
      },
      {
        icon: <FaPhone className="text-color-primary text-xl" />,
        title: t("contact.myPhone"),
        value: myPhone,
      },
      {
        icon: <FaEnvelope className="text-color-primary text-xl" />,
        title: t("contact.myEmail"),
        value: myEmail,
      }
    ];

function InfoItem({ icon, title, value }) {
  return (
    <div className="flex flex-col md:flex-row items-center group">
      <div className="w-12 h-12 bg-color-primary/20 rounded-full flex items-center justify-center mb-2 md:mb-0 md:mr-4 group-hover:bg-color-primary/30 transition-colors">
        {icon}
      </div>
      <div className="text-center md:text-left">
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </div>
  );
}

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] relative"
    >
      <ToastContainer />

      {/* Fondos decorativos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-20 left-10 w-32 h-32 bg-color-primary/10 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-color-secundary/10 rounded-full blur-3xl"
      ></motion.div>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-4xl font-bold text-white">{t("contact.title")}</h2>
        <div className="w-32 h-1 bg-color-section mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {t("contact.subtitle")}
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 w-full max-w-4xl">
        {stats.map((s, i) => (
          <StatCard key={i} value={s.value} label={s.label} />
        ))}
      </div>

      {/* Formulario */}
      <div className="w-full max-w-3xl bg-gradient-dark-card border border-color-primary/20 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white text-left mb-6">
          {t("contact.contactInfo")}
        </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {contactDetails.map((item, index) => (
          <a
            key={index}
            href={item.link || "#"}
            target={item.link ? "_blank" : "_self"}
            rel={item.link ? "noopener noreferrer" : undefined}
            className="block"
          >
            <InfoItem icon={item.icon} title={item.title} value={item.value} />
          </a>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-white text-left mb-6">
          {t("contact.sendYourMessage")}
      </h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <InputField
            label={t("contact.email")}
            name="user_email"
            type="email"
            value={formData.user_email}
            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
            placeholder={t("contact.placeholderEmail")}
          />
          <InputField
            label={t("contact.name")}
            name="user_name"
            value={formData.user_name}
            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
            placeholder={t("contact.placeholderName")}
          />
          <InputField
            label={t("contact.subject")}
            name="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder={t("contact.placeholderSubject")}
          />
          <InputField
            label={t("contact.message")}
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t("contact.placeholderMessage")}
            textarea
            maxLength={500}
          />

          {/* Botón */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 text-white font-bold rounded-xl transition relative overflow-hidden ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-btn-sent shadow-lg shadow-color-primary/20"
            }`}
          >
            {isLoading ? t("contact.sending") : t("contact.send")}
          </motion.button>
      {/* Mensaje de éxito */}
      {isSent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-center"
        >
          <div className="text-gray-300 text-sm">
            {t("contact.responseMessage")}
          </div>
        </motion.div>
      )}

        </form>
      </div>


    </section>
  );
}

export default Contact;