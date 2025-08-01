
import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import robot from "../img/yellow.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faListNumeric, faPhone, faLocation } from "@fortawesome/free-solid-svg-icons";
import logo from '../img/logo.png'

export default function RobotForm() {
  const [formData, setFormData] = useState({
    ism: "",
    familiya: "",
    yosh: "",
    raqam: "",
    manzil: "",
    kurs: ""
  });

  const [robotMsg, setRobotMsg] = useState("Hush kelibsan!");
  const [showMsg, setShowMsg] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (!formData[key].trim()) {
        setRobotMsg(`💬 ${key.charAt(0).toUpperCase() + key.slice(1)} bo'sh qoldi!`);
        setShowMsg(false);
        setTimeout(() => setShowMsg(true), 50);
        return;
      }
    }

    setRobotMsg("📤 Yuborilmoqda...");
    setShowMsg(false);
    setTimeout(() => setShowMsg(true), 50);

    const message = `\n\n📝 Yangi o'quvchi yuborildi:\n\n👤 Ism: ${formData.ism}\n👤 Familiya: ${formData.familiya}\n🎂 Yosh: ${formData.yosh}\n📱 Raqam: ${formData.raqam}\n📍 Manzil: ${formData.manzil}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot8104651750:AAG08hZyYNKCI8E6upO1uGkWsUw5qiIHVvs/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "6173952454",
            text: message,
          }),
        }
      );

      if (response.ok) {
        setRobotMsg("✅ Muvaffaqiyatli yuborildi!");
        setFormData({ ism: "", familiya: "", yosh: "", raqam: "", manzil: "" , kurs:""});
        setShowMsg(false);
        setTimeout(() => setShowMsg(true), 50);
        navigate("/rating");
      } else {
        setRobotMsg("❌ Xatolik yuz berdi!");
        setShowMsg(false);
        setTimeout(() => setShowMsg(true), 50);
      }
    } catch (err) {
      setRobotMsg("❌ Ulanishda muammo bor!");
      setShowMsg(false);
      setTimeout(() => setShowMsg(true), 50);
    }
  };

  const handleFocus = (field) => {
    const msgMap = {
      ism: <> <FontAwesomeIcon icon={faUser} /> Ismingni yoz. </>,
      familiya: <> <FontAwesomeIcon icon={faUser} /> Familiyangni yoz. </>,
      yosh: <> <FontAwesomeIcon icon={faListNumeric} /> Yoshingni kiriting. </>,
      raqam: <> <FontAwesomeIcon icon={faPhone} />Telfon raqam yoz. </>,
      kurs: <> <FontAwesomeIcon icon={faLocation} /> Kursni tanla. </>,
    };
    setRobotMsg(msgMap[field] || "✍️ Ma'lumotni kiriting.");
    setShowMsg(false);
    setTimeout(() => setShowMsg(true), 50);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-300 opacity-20 rounded-full blur-2xl animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-yellow-500 opacity-10 rounded-full blur-xl animate-bounce" />
      </div>

      {/* Robot with messages */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-6 left-6 z-10"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[250px]"
        >
          <img src={robot} alt="Robot" className="robotic drop-shadow-lg w-[120%]" />
        </motion.div>

        <AnimatePresence>
          {showMsg && (
            <motion.div
              key={robotMsg}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 10, duration: 0.5 }}
              className="absolute -top-[250px] left-40 thought-bubble px-6 py-3 text-black font-semibold text-sm"
            >
              {robotMsg}
              <div className="thought-tail">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Form */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
     
        <form
          onSubmit={handleSubmit}
          className="w-full p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl"
        >
          {["ism", "familiya", "yosh", "raqam", "manzil", "kurs"].map((field) => {
            if (field === "kurs") {
              return (
                <select
                  key={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  onFocus={() => handleFocus(field)}
                  className="w-full p-3 mb-4 bg-black border border-yellow-300 text-white placeholder-yellow-300 rounded-lg focus:outline-none"
                >
                  <option value="" disabled>Kursin tanlang</option>
                  <option value="IT">IT</option>
                  <option value="Foundation">Kompyuter savodxonligi</option>
                  <option value="English">Ingliz tili</option>
                  <option value="Korean">Koreys tili</option>
                  <option value="Matematika">Matematika</option>
                </select>
              );
            }

            const type = field === "yosh" || field === "raqam" ? "number" : "text";

            return (
              <input
                key={field}
                name={field}
                type={type}
                value={formData[field]}
                onChange={handleChange}
                onFocus={() => handleFocus(field)}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full p-3 mb-4 bg-transparent border border-yellow-300 text-yellow-100 placeholder-yellow-300 rounded-lg focus:outline-none"
              />
            );
          })}
          <button
            type="submit"
            className="w-full mt-2 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}
