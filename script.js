const paragraphs = [
    "Education empowers individuals by providing knowledge and skills for a better future. It fosters critical thinking, builds confidence, and helps in decision-making. Education shapes societies by reducing poverty and promoting equality. A strong educational foundation prepares individuals for career success and personal growth. It nurtures creativity and innovation, essential for solving global challenges. Education is not just about academics; it teaches values like empathy, discipline, and perseverance. As the backbone of development, it bridges gaps between communities and paves the way for progress. Everyone deserves access to quality education to create a better world for future generations",
    "Climate change refers to long-term shifts in temperatures and weather patterns, primarily due to human activities like burning fossil fuels. These actions release greenhouse gases, trapping heat in the atmosphere. Consequences include rising sea levels, extreme weather events, and loss of biodiversity. The melting polar ice caps threaten ecosystems, while droughts and floods impact agriculture. Mitigating climate change requires collective action: reducing emissions, adopting renewable energy, and conserving natural resources. Governments, businesses, and individuals must act to protect the planet. Addressing this crisis ensures a sustainable future for humanity and other species that share Earth.",
    "Technology has transformed every aspect of modern life, from communication to healthcare. Smartphones, the internet, and AI have made the world more connected and efficient. Education and entertainment are now accessible at the click of a button. In healthcare, advanced technology saves lives through innovative treatments and diagnostics. However, over-reliance on technology can lead to issues like reduced social interaction and cybersecurity threats. Balancing technology's benefits with mindful usage is essential. It’s a powerful tool to improve quality of life, but it must be used responsibly to avoid potential negative impacts on society and the environment.",
    "Time is an invaluable resource that, once lost, cannot be regained. Efficient time management leads to productivity and success. Wasting time can result in missed opportunities and regret. Prioritizing tasks and setting goals ensures that time is used effectively. Procrastination, a common enemy, hinders progress and creates unnecessary stress. Successful individuals understand the importance of time and use it wisely to achieve their aspirations. Time also teaches us to cherish moments with loved ones and make meaningful contributions. Respecting time is the key to a balanced and fulfilling life, personally and professionally",
    "Good health is life’s greatest asset. A healthy body and mind allow individuals to pursue goals and enjoy life. Regular exercise, a balanced diet, and adequate rest are essential for maintaining health. Neglecting health can lead to chronic illnesses, affecting productivity and happiness. Mental health is equally important; managing stress and seeking help when needed ensures emotional well-being. Investing in health is better than curing diseases. Healthy individuals contribute to stronger communities and economies. Remember, no wealth can compensate for poor health, making it vital to prioritize well-being above all else.",
    "Teamwork combines diverse skills and perspectives to achieve common goals efficiently. Collaboration fosters creativity and innovation, as individuals bring unique ideas to the table. Effective communication, mutual respect, and shared responsibility are key to successful teamwork. Challenges are tackled collectively, reducing individual burden. Teamwork also builds trust, enhances relationships, and improves problem-solving abilities. In sports, workplaces, or community projects, teams achieve more than individuals. However, teamwork requires leadership and commitment from all members. Together, everyone achieves more, highlighting the importance of working in harmony for shared success.",
    "Women play a pivotal role in shaping families, communities, and nations. As educators, leaders, and caregivers, their contributions are invaluable. Women in the workforce drive economic growth, innovation, and progress. Gender equality empowers women to pursue their dreams, benefiting society as a whole. Despite challenges like discrimination and unequal opportunities, women continue to break barriers and inspire change. Empowering women through education and rights ensures a brighter future for all. A society that values and respects women fosters harmony, development, and inclusivity",
    "Festivals reflect a community’s culture, traditions, and values. They bring people together, fostering unity and joy. Celebrations like Diwali, Christmas, and Eid promote gratitude, generosity, and bonding with loved ones. Festivals also boost local economies through trade and tourism. They teach us about our heritage, encouraging respect for diversity. However, modern festivities sometimes lead to waste or pollution. Emphasizing sustainable practices ensures that celebrations are meaningful and eco-friendly. Festivals remind us to cherish moments, express love, and create memories while preserving traditions",
    "Reading enriches the mind, expands knowledge, and fosters creativity. It enhances vocabulary, improves focus, and develops empathy by exposing readers to diverse perspectives. Whether fiction or non-fiction, books inspire imagination and critical thinking. Regular reading sharpens analytical skills and strengthens mental health by reducing stress. It is a productive habit that broadens horizons and helps individuals grow personally and professionally. In the digital age, e-books and audiobooks make reading accessible anytime, anywhere. Cultivating a reading habit early in life ensures lifelong learning and enjoyment.",
    "Social media connects people worldwide, enabling communication and information sharing. It’s a platform for self-expression, education, and entertainment. Businesses and creators use it for marketing and outreach. However, excessive use can lead to addiction, misinformation, and reduced face-to-face interactions. Cyberbullying and privacy concerns also arise from misuse. Balancing online and offline life is crucial to harness social media's benefits while minimizing its drawbacks. When used responsibly, social media fosters connections and opportunities, making it a powerful tool in the modern world.",
    "Sports promote physical fitness, discipline, and teamwork. Regular participation improves cardiovascular health, strength, and mental well-being. Playing sports fosters leadership, resilience, and problem-solving skills. They bring communities together, teaching values like fairness and respect. For students, sports enhance focus and time management. Professional athletes inspire others to adopt active lifestyles. Watching or playing sports creates joy and reduces stress. In essence, sports are a wholesome way to nurture mind and body while building character and camaraderie.",
    "Pollution harms the environment, health, and ecosystems. Air pollution causes respiratory problems, while water pollution endangers marine life and drinking supplies. Soil pollution affects agriculture, leading to food scarcity. Noise pollution disturbs peace and impacts wildlife. Human activities like industrialization and deforestation worsen pollution levels. Adopting eco-friendly practices, reducing waste, and transitioning to renewable energy can mitigate its effects. Governments, industries, and individuals must collaborate to combat pollution and ensure a sustainable future for generations to come",
    "Family is the foundation of love, support, and understanding. It shapes individuals’ values, beliefs, and identity. A nurturing family provides emotional security, helping members face life’s challenges. Families celebrate achievements and offer comfort during hardships. They teach responsibility, compassion, and patience. In modern times, maintaining strong family bonds is vital amid busy schedules. Quality time spent together strengthens relationships and creates lasting memories. A happy family is a cornerstone of personal and societal well-being",
    "Artificial Intelligence (AI) revolutionizes industries by automating tasks and enhancing efficiency. It powers innovations like self-driving cars, virtual assistants, and predictive analytics. AI transforms healthcare, finance, and education by providing personalized solutions. However, ethical concerns like job displacement and data privacy require attention. Balancing AI’s benefits with its risks ensures responsible progress. As AI continues to evolve, it holds the potential to solve complex problems and improve lives while reshaping the future of work and society",
    "Nature’s beauty lies in its diversity and serenity. Majestic mountains, serene rivers, and vibrant forests inspire awe and peace. Nature supports life, providing resources like water, air, and food. It rejuvenates the mind and body, offering solace in a fast-paced world. Protecting nature through conservation ensures its splendor for future generations. Simple acts like planting trees and reducing waste contribute to preserving its balance. Nature’s wonders remind us of life’s simplicity and the need to coexist harmoniously with our environment.",

];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
