export function Footer({ dark }) {
    return <footer>
        <p className={`${!dark ? 'text-white' : 'text-gray-700'} text-center font-semibold mb-1`}>
            &copy; Sistema de gestión
        </p>
    </footer>
}
