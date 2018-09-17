import React from 'react';
import  '../../node_modules/semantic-ui/dist/semantic.css'


class Product extends React.Component {
         constructor(){
            super()

            this.upVote=this.upVote.bind(this)
            this.downVote=this.downVote.bind(this)
         }
      upVote(){
          console.log("upvote")
          this.props.onCheck(this.props.id,1)
         
          
      }
      downVote(){
          console.log("down vote")
          this.props.onCheck(this.props.id,0)
      }

    render() {

        return (
                  <div className="item">
                    <div>
                    <img src={this.props.prodcutImage} alt=""/>
                    </div>
                    <div className="middle aligned content">
                        <div className="header">{this.props.vote}
                        <a onClick={this.upVote}>
                            <i className="large caret up icon" />
                        </a>
                        <a onClick={this.downVote}>
                            <i className="large caret down icon" />
                        </a>
                        </div>

                        <div className="description">
                            <a>{this.props.title}</a>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="extra">
                            <span>Submitted by:</span>
                            <img className="ui avatar image" src={this.props.avatarUrl} alt=""/>
                        </div>
                </div>
                </div>
                );
    }
}

export default Product;