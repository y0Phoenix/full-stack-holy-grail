function Article(props){
    return (<>
        <article> 
            <PlusMinus section="article" handle={props.handle} data={props.data}/>
            <div className="section">Article:{props.data.article}</div>
            <Data data={props.data}/>
        </article>
    </>);
}