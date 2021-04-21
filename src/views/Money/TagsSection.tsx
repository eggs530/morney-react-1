import React, {useState} from "react";
import styled from "styled-components";
import useTags from 'useTags';

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
    value: string[];
    onChange: (selected: string[]) => void//参数为空返回值为空方便声明类型
}
const TagSection: React.FunctionComponent<Props> = (props) => {
    const {tags,setTags}=useTags()
    const selectedTags = props.value;
    const onAddTag = () => {
        const tagName = window.prompt("新增的标签名为");
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    };
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
            props.onChange(selectedTags.filter(t => t !== tag));
            //如果tag已被选中，就复制所有没有被选中的tag作为新的selectedTag
        } else {
            props.onChange([...selectedTags, tag]);
        }
    };
    const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? "selected" : "";
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={
                        () => {
                            onToggleTag(tag);
                        }}
                        className={getClass(tag)}
                    >{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
};


export default TagSection;