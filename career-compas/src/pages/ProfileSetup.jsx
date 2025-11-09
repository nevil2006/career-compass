    import React, { useState } from "react";
    import { motion } from "framer-motion";
    import { ArrowLeft, ArrowRight, CheckCircle2, Upload, User, Code2, Target, Smile, Briefcase } from "lucide-react";

    const ProfileSetup = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 5;

    const [formData, setFormData] = useState({
        name: "",
        college: "",
        branch: "",
        graduationYear: "",
        cgpa: "",
        resume: null,
        skills: [],
        frameworks: [],
        databases: [],
        proficiency: "",
        careerPath: "",
        domain: [],
        goal: "",
        location: "",
        salary: "",
        learningStyle: "",
        strengths: "",
        weaknesses: "",
        hobbies: "",
        github: "",
        linkedin: "",
        portfolio: "",
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
        ...formData,
        [name]: files ? files[0] : value,
        });
    };

    const handleMultiSelect = (field, value) => {
        const selected = formData[field];
        setFormData({
        ...formData,
        [field]: selected.includes(value)
            ? selected.filter((item) => item !== value)
            : [...selected, value],
        });
    };

    const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
    const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Profile:", formData);
        alert("🎉 Profile setup complete! AI is analyzing your data...");
    };

    const progress = (step / totalSteps) * 100;

    // Options
    const skills = ["Python", "C++", "Java", "JavaScript"];
    const frameworks = ["React", "Node.js", "TensorFlow", "FastAPI"];
    const databases = ["MongoDB", "MySQL", "PostgreSQL", "Firebase"];
    const domains = ["AI/ML", "Data Science", "Full Stack", "Cybersecurity", "Cloud"];
    const learningStyles = ["Visual", "Hands-on", "Theoretical"];
    const locations = ["India", "Germany", "Remote", "Hybrid"];

    return (
        <div className="setup-container">
        <div className="setup-card">
            {/* Progress Bar */}
            <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Header */}
            <motion.div className="header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            {step === 1 && <User size={40} color="#60a5fa" />}
            {step === 2 && <Code2 size={40} color="#34d399" />}
            {step === 3 && <Target size={40} color="#facc15" />}
            {step === 4 && <Smile size={40} color="#f472b6" />}
            {step === 5 && <Briefcase size={40} color="#818cf8" />}
            <h2 className="text-xl font-semibold mt-2">Step {step} of {totalSteps}</h2>
            </motion.div>

            <form onSubmit={handleSubmit}>
            {/* STEP 1: Academic Info */}
            {step === 1 && (
                <motion.div className="form-step" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                <input name="name" placeholder="Full Name" onChange={handleChange} required />
                <input name="college" placeholder="College / University" onChange={handleChange} required />
                <input name="branch" placeholder="Branch / Department" onChange={handleChange} required />
                <input name="graduationYear" placeholder="Graduation Year (e.g., 2026)" onChange={handleChange} required />
                <input name="cgpa" placeholder="CGPA (Optional)" onChange={handleChange} />
                <label className="file-upload">
                    <Upload size={18} /> Upload Resume (PDF)
                    <input type="file" name="resume" accept=".pdf" onChange={handleChange} />
                </label>
                </motion.div>
            )}

            {/* STEP 2: Technical Skills */}
            {step === 2 && (
                <motion.div className="form-step" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                <h3>Programming Languages</h3>
                <div className="tag-list">
                    {skills.map((s) => (
                    <button key={s} type="button" className={formData.skills.includes(s) ? "tag selected" : "tag"} onClick={() => handleMultiSelect("skills", s)}>{s}</button>
                    ))}
                </div>

                <h3>Frameworks / Libraries</h3>
                <div className="tag-list">
                    {frameworks.map((f) => (
                    <button key={f} type="button" className={formData.frameworks.includes(f) ? "tag selected" : "tag"} onClick={() => handleMultiSelect("frameworks", f)}>{f}</button>
                    ))}
                </div>

                <h3>Databases / Tools</h3>
                <div className="tag-list">
                    {databases.map((d) => (
                    <button key={d} type="button" className={formData.databases.includes(d) ? "tag selected" : "tag"} onClick={() => handleMultiSelect("databases", d)}>{d}</button>
                    ))}
                </div>

                <select name="proficiency" onChange={handleChange} className="dropdown">
                    <option value="">Select Proficiency Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                </motion.div>
            )}

            {/* STEP 3: Career Interests */}
            {step === 3 && (
                <motion.div className="form-step" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                <input name="careerPath" placeholder="Preferred Career Path (e.g., AI Engineer)" onChange={handleChange} />
                <h3>Domains of Interest</h3>
                <div className="tag-list">
                    {domains.map((domain) => (
                    <button key={domain} type="button" className={formData.domain.includes(domain) ? "tag selected" : "tag"} onClick={() => handleMultiSelect("domain", domain)}>{domain}</button>
                    ))}
                </div>
                <input name="goal" placeholder="Career Goal (e.g., Product-based Company)" onChange={handleChange} />
                <select name="location" onChange={handleChange} className="dropdown">
                    <option value="">Preferred Location</option>
                    {locations.map((loc) => <option key={loc}>{loc}</option>)}
                </select>
                <input name="salary" placeholder="Expected Salary Range (Optional)" onChange={handleChange} />
                </motion.div>
            )}

            {/* STEP 4: Personality Insights */}
            {step === 4 && (
                <motion.div className="form-step" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                <select name="learningStyle" onChange={handleChange} className="dropdown">
                    <option value="">Learning Style</option>
                    {learningStyles.map((s) => <option key={s}>{s}</option>)}
                </select>
                <input name="strengths" placeholder="Your Strengths" onChange={handleChange} />
                <input name="weaknesses" placeholder="Your Weaknesses" onChange={handleChange} />
                <input name="hobbies" placeholder="Hobbies (Optional)" onChange={handleChange} />
                </motion.div>
            )}

            {/* STEP 5: Professional Identity */}
            {step === 5 && (
                <motion.div className="form-step" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                <input name="github" placeholder="GitHub URL" onChange={handleChange} />
                <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
                <input name="portfolio" placeholder="Portfolio / Website (Optional)" onChange={handleChange} />
                <label className="file-upload">
                    <Upload size={18} /> Upload Profile Photo
                    <input type="file" name="photo" accept="image/*" onChange={handleChange} />
                </label>
                <div className="ai-summary">
                    <h4>🧠 AI Summary Preview:</h4>
                    <p>“Based on your interests, you may fit well in <b>AI Engineer</b> or <b>Data Scientist</b> roles.”</p>
                </div>
                </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="btn-container">
                {step > 1 && (
                <button type="button" className="back-btn" onClick={handleBack}>
                    <ArrowLeft size={16} /> Back
                </button>
                )}
                {step < totalSteps ? (
                <button type="button" className="next-btn" onClick={handleNext}>
                    Next <ArrowRight size={16} />
                </button>
                ) : (
                <button type="submit" className="finish-btn">
                    Finish & Analyze
                </button>
                )}
            </div>
            </form>
        </div>
        </div>
    );
    };

    export default ProfileSetup;
