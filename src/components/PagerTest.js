import React from 'react'
import Pager from "./Pager.js"
import Student from "./StudentList.js"
import Modal from "./Modal.js"

export default class PagerTest extends React.Component{
    state = {
        current : 2, // 当前页码
        limit : 100, // 总数据条数。
        pagelNumber : 5, //最大页码数
        pageCapacity : 5 ,// 页容量
        studentlist : [],
        isShow : false,
    }

    changePage = (number) => {
       this.setState({
           current : number
       })
       this.fetchStudent()
    }
    constructor(props){
        super(props);
        this.fetchStudent()
    }

    async fetchStudent(){
        this.setState({
            isShow : true
        })
        var result = await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=15728238198_1569593310259&page=${this.state.current}&size=${this.state.pageCapacity}`)
                            .then(res => res.json())
                                .then((res) => {
                                    return res.data;
                                });
        setTimeout(()=>{
            this.setState({
                limit : result.cont,
                studentlist : result.findByPage,
                isShow : false
            })
        },200)
    }
   


    render(){
        return <>
            <Modal isShow={this.state.isShow}/>
            <Student stus = {this.state.studentlist}/>
            <Pager {...this.state} onChangePage={this.changePage}/>
        </>
    }
}