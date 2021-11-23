import React  from 'react';
import Layout from '../components/Layout/Layout';
import { DatePicker } from 'antd';

const AntDesign: React.FC = () => {
    return (
        <Layout page="Home">
            <DatePicker/>
        </Layout>
    )
};

export default AntDesign;