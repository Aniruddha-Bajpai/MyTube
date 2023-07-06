import React from "react";

const commentsData = [
  {
    name: "Aniruddha bajpai",
    text: "lorem ipsum, dolor sit amet, consectetur daip",
    reply: [
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
    ],
  },
  {
    name: "Aniruddha bajpai",
    text: "lorem ipsum, dolor sit amet, consectetur daip",
    reply: [
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
    ],
  },
  {
    name: "Aniruddha bajpai",
    text: "lorem ipsum, dolor sit amet, consectetur daip",
    reply: [
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
      {
        name: "Aniruddha bajpai",
        text: "lorem ipsum, dolor sit amet, consectetur daip",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <>
      <div className="flex gap-5 m-5">
        <img
          className="h-7 border rounded-full border-gray-400 my-2"
          src="https://cdn.icon-icons.com/icons2/3054/PNG/512/account_profile_user_icon_190494.png"
          alt="user"
        />
        <div className=" bg-gray-100 rounded-md p-5">
          <p>{name}</p>
          <p>{text}</p>
        </div>
      </div>

      {reply && (
        <div className="pl-5 ml-10 border-l border-l-black">
          <CommentList comments={reply} />
        </div>
      )}
    </>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, i) => {
    return <Comment data={comment} key={comment.name + " -> " + i} />;
  });
};

const Comments = () => {
  return (
    <div className="px-10 mx-5 w-[60%]">
      <h1 className="text-xl  font-bold border-b">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default Comments;
