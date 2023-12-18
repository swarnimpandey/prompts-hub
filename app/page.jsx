import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      An open-source AI prompting tool that enables users to explore, create, and share creative content
    </p>

    <Feed />
  </section>
);

export default Home;