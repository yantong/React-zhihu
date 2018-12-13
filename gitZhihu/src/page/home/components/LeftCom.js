import React,{ Component,Fragment } from 'react';
import {
    LeftContent,
    LeftHeader
} from './LeftStyled'
import LeftCell from './LeftCell/LeftCell'

class Left extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contents : [
                {
                    id : '0',
                    type : 'content',
                    title : '男生什么情况下会对女生真正失望？',
                    shortContent : '皇慌慌： 有一次 看了电影 她说好无聊要走 然后电影看了一半就和她一起走了 那天很怪 怪到牵她的手都觉得很不对 送她到家 没有互相吻别 也没有拥抱 都…',
                    agreeNum: '159',
                    discussNum: '81'
                },
                {
                    id : '1',
                    type : 'adv',
                    logo : 'https://pic2.zhimg.com/v2-dd1e1653c83381921fd64c011de056cd_xs.jpg',
                    shortTitle:'康师傅奶茶',
                    title : '如何看待火箭少女杨超越、傅菁、段奥娟代言康师傅奶茶？',
                    content: '火箭少女的粉丝群体多为青少年，在年轻消费者中，小饥小饿来一瓶康师傅奶茶备受欢迎，两者目标受众不谋而合。而火箭少女日常行程繁忙，下午喝上一瓶康师傅奶茶既方便又香醇，补充好了营养才能为粉丝呈现最好的自己。',
                    toSee : '点击购买',
                    img : 'https://pic4.zhimg.com/v2-11cd98371de7ceb54dc5c45d048a094f_400x224.jpg'
                },
                {
                    id : '0',
                    type : 'content',
                    title : '怎么看待章金莱(六小龄童)代言某西游主题手游？',
                    shortContent :'泪眼问花： 先声明，我不是gay，图片也是从其它知友的回答处下载。我真是愤怒了，这才是对孙悟空乃至《西游记》的最大恶搞。这么垃圾的网络游戏，六小龄童竟然代言，还说感受不一样的西游文化。不一样的西游文化，…',
                    img:'https://pic2.zhimg.com/50/v2-74a3b8b434ecd0a32b3a7be4dc03054f_400x224.jpg',
                    agreeNum: '1.1k',
                    discussNum : '96'
                },
                {
                    id : '2',
                    type : 'adv',
                    logo : 'https://pic4.zhimg.com/v2-e81368638aeb2f65d16e6c3652fd94af_xs.jpg',
                    shortTitle:'Space7',
                    title : '「冷血体」的女生，生活注定「凉凉」吗？',
                    content: 'Space7 暖宫产品全新上市，告别「冷血体」，用温暖呵护你的出色生活。',
                    toSee : '点击查看',
                    img : 'https://pic1.zhimg.com/v2-b949d655086ee801a5f8303f82a6fcc0_400x224.jpg'
                },
                {
                    id : '0',
                    type : 'content',
                    title : '男生什么情况下会对女生真正失望？',
                    shortContent : '皇慌慌： 有一次 看了电影 她说好无聊要走 然后电影看了一半就和她一起走了 那天很怪 怪到牵她的手都觉得很不对 送她到家 没有互相吻别 也没有拥抱 都…',
                    agreeNum: '159',
                    discussNum: '81'
                },
                {
                    id : '1',
                    type : 'adv',
                    logo : 'https://pic2.zhimg.com/v2-dd1e1653c83381921fd64c011de056cd_xs.jpg',
                    shortTitle:'康师傅奶茶',
                    title : '如何看待火箭少女杨超越、傅菁、段奥娟代言康师傅奶茶？',
                    content: '火箭少女的粉丝群体多为青少年，在年轻消费者中，小饥小饿来一瓶康师傅奶茶备受欢迎，两者目标受众不谋而合。而火箭少女日常行程繁忙，下午喝上一瓶康师傅奶茶既方便又香醇，补充好了营养才能为粉丝呈现最好的自己。',
                    toSee : '点击购买',
                    img : 'https://pic4.zhimg.com/v2-11cd98371de7ceb54dc5c45d048a094f_400x224.jpg'
                },
                {
                    id : '0',
                    type : 'content',
                    title : '怎么看待章金莱(六小龄童)代言某西游主题手游？',
                    shortContent :'泪眼问花： 先声明，我不是gay，图片也是从其它知友的回答处下载。我真是愤怒了，这才是对孙悟空乃至《西游记》的最大恶搞。这么垃圾的网络游戏，六小龄童竟然代言，还说感受不一样的西游文化。不一样的西游文化，…',
                    img:'https://pic2.zhimg.com/50/v2-74a3b8b434ecd0a32b3a7be4dc03054f_400x224.jpg',
                    agreeNum: '1.1k',
                    discussNum : '96'
                },
                {
                    id : '2',
                    type : 'adv',
                    logo : 'https://pic4.zhimg.com/v2-e81368638aeb2f65d16e6c3652fd94af_xs.jpg',
                    shortTitle:'Space7',
                    title : '「冷血体」的女生，生活注定「凉凉」吗？',
                    content: 'Space7 暖宫产品全新上市，告别「冷血体」，用温暖呵护你的出色生活。',
                    toSee : '点击查看',
                    img : 'https://pic1.zhimg.com/v2-b949d655086ee801a5f8303f82a6fcc0_400x224.jpg'
                },
                {
                    id : '0',
                    type : 'content',
                    title : '男生什么情况下会对女生真正失望？',
                    shortContent : '皇慌慌： 有一次 看了电影 她说好无聊要走 然后电影看了一半就和她一起走了 那天很怪 怪到牵她的手都觉得很不对 送她到家 没有互相吻别 也没有拥抱 都…',
                    agreeNum: '159',
                    discussNum: '81'
                },
                {
                    id : '1',
                    type : 'adv',
                    logo : 'https://pic2.zhimg.com/v2-dd1e1653c83381921fd64c011de056cd_xs.jpg',
                    shortTitle:'康师傅奶茶',
                    title : '如何看待火箭少女杨超越、傅菁、段奥娟代言康师傅奶茶？',
                    content: '火箭少女的粉丝群体多为青少年，在年轻消费者中，小饥小饿来一瓶康师傅奶茶备受欢迎，两者目标受众不谋而合。而火箭少女日常行程繁忙，下午喝上一瓶康师傅奶茶既方便又香醇，补充好了营养才能为粉丝呈现最好的自己。',
                    toSee : '点击购买',
                    img : 'https://pic4.zhimg.com/v2-11cd98371de7ceb54dc5c45d048a094f_400x224.jpg'
                },
                {
                    id : '0',
                    type : 'content',
                    title : '怎么看待章金莱(六小龄童)代言某西游主题手游？',
                    shortContent :'泪眼问花： 先声明，我不是gay，图片也是从其它知友的回答处下载。我真是愤怒了，这才是对孙悟空乃至《西游记》的最大恶搞。这么垃圾的网络游戏，六小龄童竟然代言，还说感受不一样的西游文化。不一样的西游文化，…',
                    img:'https://pic2.zhimg.com/50/v2-74a3b8b434ecd0a32b3a7be4dc03054f_400x224.jpg',
                    agreeNum: '1.1k',
                    discussNum : '96'
                },
                {
                    id : '2',
                    type : 'adv',
                    logo : 'https://pic4.zhimg.com/v2-e81368638aeb2f65d16e6c3652fd94af_xs.jpg',
                    shortTitle:'Space7',
                    title : '「冷血体」的女生，生活注定「凉凉」吗？',
                    content: 'Space7 暖宫产品全新上市，告别「冷血体」，用温暖呵护你的出色生活。',
                    toSee : '点击查看',
                    img : 'https://pic1.zhimg.com/v2-b949d655086ee801a5f8303f82a6fcc0_400x224.jpg'
                }
            ]
        }
    }

    render() {
        return (
            <LeftContent>
                <LeftHeader>
                    <a href="#" className={'selA'}>推荐</a>
                    <a href="#">关注</a>
                    <a href="#">热榜</a>
                </LeftHeader>
                {
                    this.state.contents.map((item,index) => {
                        return <LeftCell key={item.id} content={item}></LeftCell>;
                    })
                }
            </LeftContent>
        )
    }
}
export default Left;