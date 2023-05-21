import CountUp from 'react-countup';

const StatItem = ({ number, description,children }) => {
    return (
        <div className="p-10 rounded-lg ">
            <div className='flex justify-center items-center gap-5 w-fit mx-auto'>
                {children}
                <p className="text-5xl text-ruby-500 text-center font-bold">
                <CountUp
                    start={0}
                    end={number}
                    duration={3.5}
                    separator=" "
                    decimal=","
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                    ></CountUp>+
                </p>
          </div>
          <p className="text-2xl font-bold text-center mt-4">{description}</p>
        </div>
      );
};

export default StatItem;