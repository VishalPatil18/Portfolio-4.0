import Container from 'components/Container';
import Footer from 'components/Footer';

export default function Social() {
  return (
    <Container title="Social - Vishal Patil" description="I'm a social animal!">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Social
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Coming Soon...</p>
        <div className="w-full"></div>
        <Footer />
      </div>
    </Container>
  );
}
