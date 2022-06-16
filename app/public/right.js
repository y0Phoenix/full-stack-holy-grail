function Right(props){
    return (<>
        <aside>
            <PlusMinus section="right" handle={props.handle} data={props.data}/>
            <div className="section">Right:{props.data.right}</div>
            <Data data={props.data}/>            
        </aside>
    </>);
}