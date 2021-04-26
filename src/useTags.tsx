import {useState} from 'react';
import createId from './lb/createId';


const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
];
const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTag = (id:number) =>tags.filter(tag=>tag.id===id)[0]
    const findTagIndex = (id:number)=>{
        let result = -1//避免id不存在于这个数组而返回i
        for(let i =0 ;i<tags.length;i++){
            if(tags[i].id===id){
                result = i
                break
            }
        }
        return result
    }
    const updateTag = (id:number,obj:{name:string}) =>{
        const index = findTagIndex(id)
        //深拷贝 tags 得到 tasClone
        const tagsClone = JSON.parse(JSON.stringify(tags))
        //把tagsClone 的第index删掉，换成新的{id:id,name:obj.name}
        tagsClone.splice(index,1,{id:id,name:obj.name})
        setTags(tagsClone)
    }
    const deleteTag = (id:number)=>{
        const index = findTagIndex(id)
        const tagsClone = JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index,1)
        setTags(tagsClone)
    }
    return {
        tags,
        setTags,
        findTag,
        updateTag,
        findTagIndex,
        deleteTag
    };
};

export default useTags;