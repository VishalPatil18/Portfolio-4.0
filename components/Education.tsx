import EducationCard from './EducationCard';
import educationData from 'data/education';

export default function Education() {
  return (
    <div className="mt-3 text-gray-600 dark:text-gray-400 mb-16 ">
      <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-6 text-black dark:text-white">
        Education
      </h3>
      <div className="mt-2">
        {educationData.map((education, idx) => (
          <EducationCard
            key={idx}
            instituteName={education.instituteName}
            degree={education.degree}
            description={education.description}
            time={education.time}
            link={education.link}
            logo={education.logo}
          />
        ))}
      </div>
    </div>
  );
}
