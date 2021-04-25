import React from 'react';
import useTags from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from '../components/Icons';
import Button from '../components/Button';
import styled from 'styled-components';
import Input from '../components/Input';
import Center from '../components/Center';
import Space from '../components/Space';

type Params = {
    id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 14px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
    background: white;
  padding:14px 16px;
  font-size: 14px;
`
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
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="请填写备注" value="tag.name"/>
            </InputWrapper>
            <Space/>
            <Space/>
            <Center>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    );
};

export default Tag;