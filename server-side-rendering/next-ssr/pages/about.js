import Link from 'next/link';

const About = () => {
    return (
        <div style={{fontsize: '20px', color: 'orangered'}}>
            <h1>About</h1>
            <Link href='/'>
                <button>Back</button>
            </Link>
            <p>I was a magician once.</p>
        </div>
    )
}
 export default About;