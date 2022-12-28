import React from "react";
import {Layout} from "antd";
import cats from "../images/cats.jpg";

export const First = () => {
    const {Header, Content} = Layout;
    return (
        <>
            <Header style={{padding: 0, color: "#9BBEFF", background: "white"}} className="page_title"> Cats </Header>
            <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                <div style={{padding: 24, textAlign: 'center'}} className="page_background">
                    <img alt="/" src={cats} className="image"/>
                </div>
            </Content>
        </>
    );
};
