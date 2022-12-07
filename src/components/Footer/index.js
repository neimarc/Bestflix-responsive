import './footer-styles.css';
import Logo from '../../assets/logo.svg'

function Footer() {
    return (
        <footer>
            <div className='footer-left'>
                <img src={Logo} alt='logo' />
                <p>Lorem ipsum dolor sit amet. Aut voluptatem repudiandae ut rerum totam qui natus voluptate aut necessitatibus quos est vero corporis et dicta molestias qui illum nostrum. Est quam voluptas in quod harum eos distinctio obcaecati aut cupiditate voluptatem aut magni quibusdam ut voluptatibus nostrum sed beatae illo. Qui iure officia ut cumque mollitia aut numquam doloremque et porro perferendis ea praesentium voluptas qui officiis explicabo.</p>
            </div>
            <div className='footer-right'>
                <p>Lorem ipsum dolor sit amet. Aut voluptatem repudiandae ut rerum totam qui natus voluptate aut necessitatibus quos est vero corporis et dicta molestias qui illum nostrum. Est quam voluptas in quod harum eos distinctio obcaecati aut cupiditate voluptatem aut magni quibusdam ut voluptatibus nostrum sed beatae illo. Qui iure officia ut cumque mollitia aut numquam doloremque et porro perferendis ea praesentium voluptas qui officiis explicabo.</p>
            </div>
        </footer>
    )
}

export default Footer