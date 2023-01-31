import Container from "components/Container";
import Footer from "components/Footer";
import ProjectCard from "components/ProjectCard";
import projectsData from "data/projects";

export default function Projects() {
  return (
    <Container
      title="Projects - Vishal Patil"
      description="Projects built by me!"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I created a few projects to learn more about the technologies I use.
          You can check them out here. Let me know what you think!
        </p>
        <div className="w-full">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              link={project.link}
              projectImage={project.projectImage}
              stack={project.stack}
              brandColor={project.brandColor}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        <Footer />
      </div>
    </Container>
  );
}
