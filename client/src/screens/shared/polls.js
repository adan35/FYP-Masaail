import { Component } from 'react';
import Poll from 'react-polls';

import user from "../../assets/img/user.jpg";

const pollQuestion = 'Choose between these?'
const pollAnswers = [
  { option: 'React', votes: 8 },
  { option: 'Angular', votes: 2 }
]

class Polls extends Component {
    state = {
        pollAnswers: [...pollAnswers]
      }
     
  handleVote = voteAnswer => {
        const { pollAnswers } = this.state
        const newPollAnswers = pollAnswers.map(answer => {
          if (answer.option === voteAnswer) answer.votes++
          return answer
        })
        this.setState({
          pollAnswers: newPollAnswers
        })
    }
    render () {
        const { pollAnswers } = this.state
        return (
            <>
                <div className='post'>
                    <div className='row'>
                        <div className='col-md-2 profile-img'>
                            <div className='img'>
                                <img src={user} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Muhammad Haris</h4>
                            <h5>Lahore</h5>
                        </div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Views</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
                    </div>
                    <div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <i class="fas fa-plus-circle"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Support</h5>
                        </div>
                    </div>
                </div>
                
                <div className='post'>
                    <div className='row'>
                        <div className='col-md-2 profile-img'>
                            <div className='img'>
                                <img src={user} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Muhammad Haris</h4>
                            <h5>Lahore</h5>
                        </div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Views</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
                    </div>
                    <div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <i class="fas fa-plus-circle"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Support</h5>
                        </div>
                    </div>
                </div>

                <div className='post'>
                    <div className='row'>
                        <div className='col-md-2 profile-img'>
                            <div className='img'>
                                <img src={user} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Muhammad Haris</h4>
                            <h5>Lahore</h5>
                        </div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Views</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
                    </div>
                    <div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <i class="fas fa-plus-circle"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Support</h5>
                        </div>
                    </div>
                </div>

                <div className='post'>
                    <div className='row'>
                        <div className='col-md-2 profile-img'>
                            <div className='img'>
                                <img src={user} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Muhammad Haris</h4>
                            <h5>Lahore</h5>
                        </div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Views</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
                    </div>
                    <div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <i class="fas fa-plus-circle"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Support</h5>
                        </div>
                    </div>
                </div>

                <div className='post'>
                    <div className='row'>
                        <div className='col-md-2 profile-img'>
                            <div className='img'>
                                <img src={user} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Muhammad Haris</h4>
                            <h5>Lahore</h5>
                        </div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Views</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
                    </div>
                    <div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <i class="fas fa-plus-circle"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-6'>
                            <h5 className='text-end'>231 Support</h5>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Polls;