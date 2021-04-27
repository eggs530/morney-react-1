import React from 'react';
import useTags from 'useTags';
import {useParams, useHistory} from 'react-router-dom';
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
  padding: 14px 16px;
  font-size: 14px;
`;
const Tag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();//把id重命名为idString
    const tag = findTag(parseInt(idString));
    const tagContent = (tag: { id: number; name: string }) => (
        <div>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="请填写备注"
                       value={tag.name}
                       onChange={(e) => {
                           updateTag(tag.id, {name: e.target.value});
                       }}
                />
            </InputWrapper>
            <Space/>
            <Space/>
            <Center>
                <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
            </Center>
        </div>
    );
    const history = useHistory();
    const onClickBack = () => {
        history.goBack();
    };

    return (
        <Layout>
            <Topbar>
                <Icon name="left" onClick={onClickBack}/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            {tag ? tagContent(tag) : <div><Center>tag不存在</Center></div>}
        </Layout>
    );
};

export default Tag;