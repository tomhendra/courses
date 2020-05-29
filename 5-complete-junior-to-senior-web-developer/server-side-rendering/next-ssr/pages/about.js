import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
    return (
        <div style={{fontsize: '20px', color: 'orangered'}}>
            <h1>About</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <Image />
            <p>I was a magician once.</p>
        </div>
    )
}
 export default About;