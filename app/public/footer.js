function Footer(props){
    return (<>
        <footer> 
            <PlusMinus section="footer" handle={props.handle} data={props.data}/>
            <div className="section">Footer:{props.data.footer}</div>
            <Data data={props.data}/> 
        </footer> 
    </>);
}