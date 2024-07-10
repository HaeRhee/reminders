import Header from "@src/components/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MyPage = () => {
  let { email } = useParams();
  const nickname = "아무개";
  const [isEdit, _] = useState(true);

  return (
    <div>
      <Header />
      userMail : {email}
      <main>
        {!isEdit ? (
          <form>
            <label>
              <input type="text" />
            </label>
          </form>
        ) : (
          <section>
            <ul>
              <li>{nickname}</li>
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default MyPage;
