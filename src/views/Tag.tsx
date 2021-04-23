import React from 'react';
import useTags from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from '../components/Icons';
import Button from '../components/Button';
import styled from 'styled-components';

type Params = {
    id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height:14px;
  padding:14px;
  background:white;
`;
const Tag: React.FC = () => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="标签名"/>
                </label>
                <div>
                    <Button>删除标签</Button>
                </div>
            </div>
        </Layout>
    );
};

export default Tag;