import React from 'react';
import Product from './Product';
import feedback from '../Data';
import axios from 'axios'

class ProductList extends React.Component {

    constructor(){
        super()
        this.state={
              products:feedback
        }
        this.voteClicked=this.voteClicked.bind(this)
    }
    
    componentWillMount(){
        this.getApiData()
    }

 getApiData(){
        axios.get("http://localhost:4444/feedback")
        .then((Response)=>{
            this.setState({products:Response.data})
        
        })
    }

    voteClicked(id , check){
        console.log("upvote clicked for"+id);
        const updatedProducts=this.state.products.map((p)=>{ 
            if(p.id === id && check===1){
              return Object.assign({},p,{vote:p.vote+1})
            } 
            else if(p.id === id && check===0){
                return Object.assign({},p,{vote:p.vote-1})
            }
            else{
                return p
            }
        })
        this.setState({products:updatedProducts})
    }


    render() { 

        const product = feedback
      //  console.log(product)
       const sortedproductState=this.state.products.sort((a,b)=>(
       a.vote-b.vote
       ))

     const allproducts=sortedproductState.map((p)=>{
        return (  <Product 
                    key={p.id}
                    id={p.id} 
                    title={p.title} 
                    description={p.description} 
                    url={p.url} 
                    prodcutImage={p.imageUrl} 
                    avatarUrl={p.avatarUrl}
                    vote={p.vote}
                    onCheck={this.voteClicked}>
            </Product>
            )
        })
        return ( 
                
                        <div className="ui unstackable items">
                            {allproducts}
                        </div>
                   
         );
    }
}
 
export default ProductList;