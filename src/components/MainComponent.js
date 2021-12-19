import React from "react";
import Comment from "./CommentComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      replies: [],
    };
  }

  render() {
    return (
      <div className="container main">
        <Comment
          userImage={this.state.user.image.png}
          userName={this.state.user.username}
          commentDate={this.state.createdAt}
          commentContent={this.state.content}
          commentScore={this.state.score}
        />
      </div>
    );
  }
}

export default Main;
