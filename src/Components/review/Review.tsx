import React from 'react';

interface Question {
    ques: string;
    options: string[];
    correctAnswer: string;
}

interface ReviewProps {
    data: Question[];
    score: number;
    answer: { [key: number]: string };
    setReset: (reset: boolean) => void;
}

const Review: React.FC<ReviewProps> = ({ data, score, answer, setReset }) => {


    return (
        <div className="p-3 flex flex-col items-center">
            <div className="border-b-2 border-green-300 w-full max-w-2xl flex items-center justify-between px-3 py-6 shadow-md">
                <p className="">{`You scored ${score} out of ${data.length}`}</p>
                <button
                    className="px-8 py-2 rounded-full bg-[#2ec4b6] text-white"
                    onClick={() => setReset(true)}
                >
                    Retake
                </button>
            </div>
            <div className="w-full max-w-2xl">
                {data.map((item, index) => (
                    <div key={index} className="border-t-4 shadow rounded border-green-700 px-8 my-2">
                        <div className="ques-head text-center py-2 px-3 my-4 bg-white rounded">
                            <p className="text-3xl" >
                                {item.ques}
                            </p>
                        </div>
                        <div className="options grid grid-cols-1 gap-3 py-2">
                            {item.options.map((option, i) => (
                                <div
                                    key={i}
                                    className={`
                                        ${item.correctAnswer === option ? 'bg-green-200' : ''}  
                                        ${answer[index] === option && answer[index] !== item.correctAnswer ? 'bg-red-200' : ''} 
                                        transition-all duration-300 rounded border p-4
                                    `}
                                >
                                    <button>{option}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
