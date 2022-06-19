export function GradientText({ content }) {

    return <div className='text-2xl font-extrabold text-center'>
        <span className='bg-clip-text text-transparent bg-gradient-red'>
            {content}
        </span>
    </div>
}