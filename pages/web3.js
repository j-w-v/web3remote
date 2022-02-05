import Layout from '../components/Layout'


export default function Web3() {
    return (
        <Layout
            title={true}
            titleText="The Decentralized Web"
        >
        <article className="my-8 px-6 text-justify">
       <p>
        Web3 is anything you currently use on the internet and decentralize it.</p>
        <p>
        This means that it's not controlled by any authorities, it's controlled by the people belonging to the network. In other words, Web3 is 'spread' across multiple computers in the world. The power is in the hands of the people.
        </p>
        <p>Web3 benefits:</p>
        <ul>
            <li>Decentralized</li>
            <li>Not vulnerable to attacks
            </li>
            <li>Not censored</li>
            <li>No personal data</li>
        </ul>
        </article>
        </Layout>
    )
}