export default function Expressions (){
    const subtext = 'This is my subtext';
    const reactLogoUrl = 'https://th.bing.com/th/id/R.a56c9786eb734ef8a03307cb4f79def3?rik=fNES4SjqZAK2wQ&pid=ImgRaw&r=0';

    const duplicate = (value:number) => value * 2

    return (
        <>
            	<h1>Expressions example</h1>
                <h2>{subtext}</h2>
                <h3>{duplicate(3)}</h3>
                <img src={reactLogoUrl} alt="" />
        </>
    )
}