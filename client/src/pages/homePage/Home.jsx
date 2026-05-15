import { useState, useEffect } from "react";
import { toast } from "react-toastify";
 
const API = import.meta.env.VITE_API;
 
const serif = { fontFamily: "'Cormorant Garamond', serif" };
 
const inp =
    "w-full px-5 py-4 rounded-2xl border border-[#EAE0F5] bg-[#FAF7FD] text-[14px] sm:text-[15px] text-[#2D1F3D] placeholder-[#8B78A0] outline-none transition-all duration-200 focus:border-[#7B5EA7] focus:bg-white focus:ring-2 focus:ring-[#7B5EA7]/10";
 
const Home = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [massageType, setMassageType] = useState("სახის ექსთეტიკური მასაჟი");
    const [comment, setComment] = useState("");
    const [btn, setBtn] = useState(false);
 
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");
 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });
 
        elements.forEach((el) => observer.observe(el));
 
        return () => observer.disconnect();
    }, []);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtn(true);
        const response = await fetch(`${API}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name, phone, massageType, comment }),
        });
 
        const data = await response.json();
 
        if (!data.ok) return toast.error(data.message) && setBtn(false);

        setBtn(false);
        
        toast.success(data.message);
    };
 
    return (
        <div
            style={{ fontFamily: "'Noto Sans Georgian', sans-serif" }}
            className="bg-[#FAF7FD] text-[#2D1F3D] overflow-x-hidden"
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Noto+Sans+Georgian:wght@300;400;500;600&display=swap');
                html { scroll-behavior: smooth; }
            `}</style>
 
            <a
                href="https://wa.me/995599062558"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center text-2xl shadow-[0_4px_20px_rgba(37,211,102,.4)] transition-all hover:scale-110"
            >
                💬
            </a>
 
            <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-16 bg-[rgba(250,247,253,0.93)] backdrop-blur-md border-b border-[rgba(123,94,167,0.15)]">
                <a href="#" className="flex items-center gap-3 no-underline">
                    <div className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full overflow-hidden border-2 border-[#7B5EA7] bg-white shadow-[0_4px_20px_rgba(123,94,167,.15)] shrink-0">
                        <img
                            src="/logo.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="text-[17px] sm:text-[18px] font-semibold text-[#4A3470]">
                            მასაჟი ბორჯომში
                        </div>
                        <div className="text-[11px] text-[#8B78A0] tracking-widest uppercase">
                            ბორჯომი · საქართველო
                        </div>
                    </div>
                </a>
 
                <ul className="hidden lg:flex gap-10 list-none">
                    {[
                        ["#services", "სერვისები"],
                        ["#booking", "ჯავშანი"],
                        ["#booking", "კონტაქტი"],
                    ].map(([href, label]) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-[14px] text-[#5A4470] no-underline hover:text-[#7B5EA7] transition-all"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
 
                <a
                    href="#booking"
                    className="hidden sm:flex bg-[#7B5EA7] text-white no-underline px-7 py-3 rounded-full text-[14px] font-medium transition-all hover:bg-[#4A3470]"
                >
                    სეანსი დაიჯავშნე
                </a>
            </nav>
 
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[90px] overflow-hidden">
                <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-24">
                    <div className="h1 inline-flex items-center gap-2 bg-[#EDE4F5] text-[#7B5EA7] text-[12px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full w-fit mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#7B5EA7]" />
                        ბორჯომი, საქართველო
                    </div>
 
                    <h1 className="h2 text-[60px] sm:text-[72px] md:text-[86px] lg:text-[100px] font-semibold leading-[0.95] text-[#2D1F3D]">
                        მასაჟი
                    </h1>
 
                    <span
                        style={serif}
                        className="h3 block text-[55px] sm:text-[68px] md:text-[80px] lg:text-[92px] italic text-[#7B5EA7] leading-none mb-7"
                    >
                        ბორჯომში
                    </span>
 
                    <p className="h4 text-[16px] sm:text-[18px] text-[#8B78A0] leading-[1.9] max-w-[580px] mb-10">
                        სანდო ხელები, კომფორტული გარემო და რეალური შედეგი ერთ სივრცეში.
                        სახის ესტეტიკური და საბავშვო სამკურნალო მასაჟი — და სხვა.
                    </p>
 
                    <div className="h5 flex flex-wrap gap-4">
                        <a
                            href="#booking"
                            className="bg-[#7B5EA7] text-white no-underline px-10 py-4 rounded-full text-[15px] transition-all hover:bg-[#4A3470]"
                        >
                            სეანსის დაჯავშნა
                        </a>
                        <a
                            href="#services"
                            className="border border-[#7B5EA7] text-[#7B5EA7] no-underline px-9 py-4 rounded-full text-[15px] hover:bg-[#EDE4F5] transition-all"
                        >
                            სერვისები →
                        </a>
                    </div>
 
                    <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-[rgba(123,94,167,0.15)]">
                        {[
                            ["50+", "კმაყოფილი\nკლიენტი"],
                            ["5+", "წლის\nგამოცდილება"],
                            ["4.9★", "საშუალო\nშეფასება"],
                        ].map(([num, label]) => (
                            <div key={num}>
                                <div style={serif} className="text-[42px] sm:text-[50px] text-[#7B5EA7] leading-none">
                                    {num}
                                </div>
                                <div className="text-[12px] text-[#8B78A0] whitespace-pre-line mt-1">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
 
                <div className="bg-gradient-to-br from-[#E8D8F5] via-[#C9A8E8] to-[#B08ACF] flex items-center justify-center overflow-hidden min-h-[500px] lg:min-h-screen">
                    <div className="grid grid-cols-2 gap-4 p-6 sm:p-8 w-full max-w-[620px]">
 
                        <div className="row-span-2 rounded-[60px_60px_60px_20px] overflow-hidden border border-white/30 bg-white/20 shadow-[0_10px_40px_rgba(0,0,0,.08)] h-[540px]">
                            <img
                                src="/room.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
 
                        <div className="rounded-[20px] overflow-hidden border border-white/30 bg-white/20 shadow-[0_10px_40px_rgba(0,0,0,.08)] h-[260px]">
                            <img
                                src="/child.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
 
                        <div className="rounded-[20px_20px_60px_20px] overflow-hidden border border-white/30 bg-white/20 shadow-[0_10px_40px_rgba(0,0,0,.08)] h-[260px]">
                            <img
                                src="/head.jpeg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
 
                    </div>
                </div>
            </section>
 
            <section id="services" className="px-5 py-20 sm:px-8 lg:px-20 xl:px-28">
                <div className="reveal text-center mb-16">
                    <div className="flex items-center justify-center gap-3 text-[12px] tracking-[3px] uppercase text-[#7B5EA7] mb-4">
                        <span className="w-8 h-px bg-[#A07BC4]" />
                        სერვისები
                        <span className="w-8 h-px bg-[#A07BC4]" />
                    </div>
                    <h2 className="text-[40px] sm:text-[52px] md:text-[60px] font-semibold text-[#2D1F3D]">
                        პროფესიონალური{" "}
                        <em style={serif} className="not-italic italic text-[#7B5EA7]">
                            მასაჟი
                        </em>
                    </h2>
                    <p className="text-[16px] text-[#8B78A0] mt-4">
                        ინდივიდუალური მიდგომა · გამოცდილი სპეციალისტი · კომფორტული გარემო
                    </p>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="reveal svc-card relative bg-white rounded-[32px] p-8 border border-[rgba(123,94,167,0.15)] flex flex-col overflow-hidden hover:-translate-y-1 transition-all hover:shadow-[0_20px_50px_rgba(123,94,167,.12)]">
                        <div className="w-[60px] h-[60px] rounded-2xl bg-[#EDE4F5] flex items-center justify-center text-3xl mb-6">
                            🌸
                        </div>
                        <div className="text-[24px] font-semibold mb-4">სახის ესტეტიკური მასაჟი</div>
                        <div className="text-[15px] text-[#8B78A0] leading-[1.9] flex-1 mb-7">
                            კანის გაჯანსაღება, ლიმფური დრენაჟი, კოლაგენის გაძლიერება და რეალური შედეგი.
                        </div>
                        <div className="flex items-center justify-between pt-5 border-t border-[rgba(123,94,167,0.15)]">
                            <div>
                                <div style={serif} className="text-[38px] text-[#7B5EA7]">50₾</div>
                                <div className="text-[12px] text-[#8B78A0]">60 წუთი</div>
                            </div>
                            <button
                                onClick={() => document.getElementById("booking").scrollIntoView({ behavior: "smooth" })}
                                className="bg-[#EDE4F5] text-[#7B5EA7] px-5 py-3 rounded-2xl text-[13px] transition-all hover:bg-[#7B5EA7] hover:text-white"
                            >
                                დაჯავშნა
                            </button>
                        </div>
                    </div>
 
                    <div className="reveal bg-[#F5F0FB] rounded-[32px] p-8 border border-dashed border-[rgba(123,94,167,.3)] flex flex-col items-center justify-center text-center">
                        <div className="text-5xl mb-5 opacity-50">✦</div>
                        <div className="text-[24px] font-semibold text-[#5A4470] mb-4">
                            და სხვა
                            <br />
                            სერვისები
                        </div>
                        <div className="text-[15px] text-[#8B78A0] leading-[1.8] max-w-[240px]">
                            დამატებითი სერვისების შესახებ მოგვწერეთ პირდაპირ
                        </div>
                    </div>
 
                    <div
                        className="reveal rounded-[32px] p-8 flex flex-col overflow-hidden"
                        style={{ background: "linear-gradient(135deg,#4A3470 0%,#7B5EA7 100%)" }}
                    >
                        <div className="w-[60px] h-[60px] rounded-2xl bg-white/15 flex items-center justify-center text-3xl mb-6">
                            👶
                        </div>
                        <div className="text-[24px] font-semibold text-white mb-4">საბავშვო სამკურნალო მასაჟი</div>
                        <div className="text-[15px] text-white/70 leading-[1.9] flex-1 mb-7">
                            სპეციალიზებული ტექნიკა ბავშვებისთვის — სწორ განვითარებასა და ჯანმრთელობაზე ზრუნვა.
                        </div>
                        <div className="flex items-center justify-between pt-5 border-t border-white/15">
                            <div>
                                <div style={serif} className="text-[38px] text-white">25-35₾</div>
                                <div className="text-[12px] text-white/60">30 წუთი</div>
                            </div>
                            <button
                                onClick={() => document.getElementById("booking").scrollIntoView({ behavior: "smooth" })}
                                className="bg-white/20 text-white px-5 py-3 rounded-2xl text-[13px] transition-all hover:bg-white/35"
                            >
                                დაჯავშნა
                            </button>
                        </div>
                    </div>
                </div>
            </section>
 
            <section
                id="booking"
                className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-20 xl:px-28"
                style={{ background: "linear-gradient(135deg,#4A3470 0%,#6B4F9A 50%,#7B5EA7 100%)" }}
            >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
                    <div className="reveal">
                        <div className="text-[12px] tracking-[3px] uppercase text-white/60 mb-4">კონტაქტი</div>
                        <h2 className="text-[46px] sm:text-[58px] md:text-[68px] text-white leading-[1.05] mb-5">
                            სეანსი
                            <br />
                            <em style={serif} className="not-italic italic text-white/70">
                                დაიჯავშნე
                            </em>
                        </h2>
                        <p className="text-[16px] text-white/65 leading-[1.9] mb-10">
                            შეავსეთ ფორმა ან მოგვწერეთ პირდაპირ.
                        </p>
 
                        <div className="flex flex-col gap-5">
                            {[
                                ["📍", "მდებარეობა", "ბორჯომი, სააკაძის ქუჩა #2"],
                                ["🕐", "სამუშაო საათები", "ყოველდღე 10:00 – 19:00"],
                                ["📱", "WhatsApp / Messenger", "+995 599 06 25 58"],
                                ["🎁", "სასაჩუქრე ბარათი", "ნებისმიერ სერვისზე ხელმისაწვდომია"],
                            ].map(([icon, label, val]) => (
                                <div key={label} className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-white/[0.12] flex items-center justify-center text-xl shrink-0">
                                        {icon}
                                    </div>
                                    <div>
                                        <div className="text-[12px] text-white/50 font-light mb-1">{label}</div>
                                        <div className="text-[14px] text-white/85 font-light leading-snug">{val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
 
                    <div className="reveal bg-white rounded-[32px] p-7 sm:p-10 shadow-[0_24px_64px_rgba(74,52,112,0.25)]">
                        <div className="text-[24px] font-semibold text-[#2D1F3D] mb-7">სეანსის ჯავშანი</div>
 
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                className={inp}
                                type="text"
                                placeholder="სახელი და გვარი"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                className={inp}
                                type="number"
                                placeholder="ტელეფონის ნომერი"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                            <select
                                className={inp}
                                onChange={(e) => setMassageType(e.target.value)}
                                value={massageType}
                            >
                                <option>სახის ექსთეტიკური მასაჟი</option>
                                <option>ბავშვთა სამკურნალო მასაჟი</option>
                                <option>სხვა...</option>
                            </select>
                            <input
                                className={inp}
                                type="text"
                                placeholder="კომენტარი ან კითხვა"
                                onChange={(e) => setComment(e.target.value)}
                                value={comment}
                            />
                            <button
                                disabled={btn}
                                type="submit"
                                className="mt-2 w-full bg-[#7B5EA7] text-white rounded-full py-4 text-[15px] transition-all hover:bg-[#4A3470]"
                            >
                                {btn ? "დაელოდეთ...": "გაგზავნა ->"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
 
            <footer className="bg-[#2D1F3D] text-white/70 px-5 pt-14 pb-8 sm:px-8 lg:px-20 xl:px-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10 mb-7">
                    <div className="reveal">
                        <div className="text-[22px] text-white font-semibold mb-2">მასაჟი ბორჯომში</div>
                        <div className="text-[11px] text-white/35 tracking-widest uppercase mb-4">
                            ბორჯომი · საქართველო
                        </div>
                        <p className="text-[14px] text-white/45 leading-[1.9]">
                            სანდო ხელები, კომფორტული გარემო და რეალური შედეგი ერთ სივრცეში.
                        </p>
                    </div>
 
                    <div className="reveal">
                        <div className="text-[13px] text-white uppercase mb-4">სერვისები</div>
                        <ul className="flex flex-col gap-3 list-none">
                            {["სახის ესტეტიკური მასაჟი", "საბავშვო სამკურნალო მასაჟი", "და სხვა..."].map((s) => (
                                <li key={s}>
                                    <a className="text-[14px] text-white/45 hover:text-[#A07BC4] transition-all cursor-pointer">
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
 
                    <div className="reveal">
                        <div className="text-[13px] text-white uppercase mb-4">კონტაქტი</div>
                        <ul className="flex flex-col gap-3 list-none">
                            {["ბორჯომი, სააკაძის ქუჩა #2", "+995 599 06 25 58", "ყოველდღე კვირის გარდა 10:00–19:00"].map((s) => (
                                <li key={s}>
                                    <a className="text-[14px] text-white/45 hover:text-[#A07BC4] transition-all cursor-pointer">
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
 
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-[12px] text-white/30">
                    <span>© 2026 მასაჟი ბორჯომში</span>
 
                    <div className="flex gap-3">
                        <a
                            href="https://instagram.com/YOUR_HANDLE"
                            target="_blank"
                            rel="noreferrer"
                            className="w-[40px] h-[40px] rounded-xl bg-white/[0.08] flex items-center justify-center text-[16px] text-white hover:bg-[#7B5EA7] transition-all"
                            aria-label="Instagram"
                        >
                            📷
                        </a>
                        <a
                            href="https://facebook.com/YOUR_PAGE"
                            target="_blank"
                            rel="noreferrer"
                            className="w-[40px] h-[40px] rounded-xl bg-white/[0.08] flex items-center justify-center text-[16px] text-white hover:bg-[#7B5EA7] transition-all"
                            aria-label="Facebook"
                        >
                            📘
                        </a>
                        <a
                            href="https://wa.me/995599062558"
                            target="_blank"
                            rel="noreferrer"
                            className="w-[40px] h-[40px] rounded-xl bg-white/[0.08] flex items-center justify-center text-[16px] text-white hover:bg-[#7B5EA7] transition-all"
                            aria-label="WhatsApp"
                        >
                            💬
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
 
export default Home;