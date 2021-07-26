import LayoutLeft from "./child/layoutLeft";
import LayoutRight from "./child/layoutRight";
import { Layout } from 'antd';
import "./index.less"
const { Header, Footer, Content } = Layout;

function LayoutBody(props: any) {
    return (
        <div className="layout-body">
            <Layout className="layout-content">
                <LayoutLeft />
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <LayoutRight />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default LayoutBody;