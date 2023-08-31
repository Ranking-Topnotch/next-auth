import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover $ Tag
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Powered AI Prompt</span>
            <p className="desc text-center">
                AI prompt" generally refers to a prompt or instruction given to an 
                artificial intelligence (AI) model in order to generate a specific type of response or output.
            </p>
        </h1>

        <Feed />

    </section>
  )
}

export default Home