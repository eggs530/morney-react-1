import React from "react";
import styled from "styled-components";
import useTags from 'hooks/useTags';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: #f60;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
type Props = {
    value: number[];
    onChange: (selected: number[]) => void//参数为空返回值为空方便声明类型
}
const TagSection: React.FunctionComponent<Props> = (props) => {
    const {tags,addTag}=useTags()
    const selectedIds = props.value;
    const onToggleTag = (tagId: number) => {
        const index = selectedIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedIds.filter(t => t !== tagId));
            //如果tag已被选中，就复制所有没有被选中的tag作为新的selectedTag
        } else {
            props.onChange([...selectedIds, tagId]);
        }
    };
    const getClass = (tagId: number) => selectedIds.indexOf(tagId) >= 0 ? "selected" : "";
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={
                        () => {
                            onToggleTag(tag.id);
                        }}
                        className={getClass(tag.id)}
                    >{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    );
};


export default TagSection;