import Container from 'components/Container';
import CareerCard from 'components/CareerCard';
import careerData from 'data/career';
import positionOfResponsibilityData from 'data/positionOfResponsibility';
import openSourceData from 'data/openSource';
import Footer from 'components/Footer';

export default function Experience() {
  return (
    <Container
      title="Experience - Vishal Patil"
      description="My past working Experiences!"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Experience
        </h1>

        <h1 className="font-bold text-xl md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Work Experience
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I have worked with some great Organisations in past in the domain of
          technology. You can check them out here.
        </p>
        <div className="w-full">
          {careerData.map((career, index) => (
            <CareerCard
              key={index}
              companyName={career.companyName}
              role={career.role}
              description={career.description}
              time={career.time}
              link={career.link}
              stack={career.stack}
              logo={career.logo}
            />
          ))}
        </div>

        <h1 className="font-bold text-xl md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Open Source Contributions
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I have also made some Open-source contributions. You can check them
          out here.
        </p>
        <div className="w-full">
          {openSourceData.map((os, index) => (
            <CareerCard
              key={index}
              companyName={os.companyName}
              role={os.role}
              description={os.description}
              time={os.time}
              link={os.link}
              stack={os.stack}
              logo={os.logo}
            />
          ))}
        </div>

        <h1 className="font-bold text-xl md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Positions of Responsibility
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I have held various positions of responsibility in various
          Organisations in past in the domain of technology, teaching and
          managment. You can check them out here.
        </p>
        <div className="w-full">
          {positionOfResponsibilityData.map((career, index) => (
            <CareerCard
              key={index}
              companyName={career.companyName}
              role={career.role}
              description={career.description}
              time={career.time}
              link={career.link}
              stack={career.stack}
              logo={career.logo}
            />
          ))}
        </div>
        <Footer />
      </div>
    </Container>
  );
}
