import React from "react";
import {Button, Layout} from "antd";
import dogs from "../images/dogs.jpg";

export const Second = () => {
    const {Header, Content} = Layout;
    return (
        <>
            <Header style={{padding: 0, color: "#9BBEFF", background: "white"}} className="page_title"> Dogs </Header>
            <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                <div style={{padding: 24, textAlign: 'center'}} className="page_background">
                    <img alt="/" src={dogs} className="image"/>
                    <div>
                    <Button className="button">Cute</Button>
                    <Button className="button">Adorable</Button>
                    </div>
                </div>
            </Content>
        </>
    );
};
