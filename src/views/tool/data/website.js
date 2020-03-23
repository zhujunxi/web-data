import News from './category/news'
import Tool from './category/tool'
import Wechat from './category/wechat'
import Zhihu from './category/zhihu'
import Insight from './category/insight'
import PublicIndex from './category/publicIndex'
import ECommerce from './category/eCommerce'
import SelfMedia from './category/selfMedia'
import Marketing from './category/marketing'
import Program from './category/program'
import Company from './category/company'

export default [
    {
        label: '资讯',
        resource: News
    },
    {
        label: '工具',
        resource: Tool
    },
    {
        label: '项目',
        resource: Company
    },
    {
        label: '数据与指数',
        resource: Insight
    },
    {
        label: '自媒体',
        resource: SelfMedia
    },
    {
        label: '营销',
        resource: Marketing
    },
    {
        label: '技术',
        resource: Program
    }
]
