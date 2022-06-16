function Header(props){
    return (<>
        <header>
            <PlusMinus section="header" handle={props.handle} data={props.data}/>
            <div className="section">Header:{props.data.header}</div>
            <Data data={props.data}/>
        </header>
    </>);
}


