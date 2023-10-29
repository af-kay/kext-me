import Typewriter from 'typewriter-effect';

export const MainPage: React.FC = () => {
  return (
    <div>
      <h1>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={typewriter =>
            typewriter
              .typeString('Привет!')
              .pauseFor(700)
              .deleteAll()
              .typeString('Hello!')
              .pauseFor(700)
              .start()
          }
        />
      </h1>
    </div>
  );
};
