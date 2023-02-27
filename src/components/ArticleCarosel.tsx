// Article Carosel
import style from '../styles/ArticleCarosel.module.css';
//

type Article = {
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
}
type ArticleCroselProps = {
    articles: Article[];
}

function ArticleCard({ article }: { article: Article }) {
    return (
            <div className={`flex ${style.border_box} p-3 m-10 `}>
                <div className={`text_container flex-col p-10 w-4/5 `}>
                    <div className={`title font-fira-code text-3xl`}>
                        <span>{article.title}</span>
                    </div>
                    <div className={`description font-fira-code text-sm`}>
                        <span>{article.description}</span>
                    </div>
                </div>

                <div className={`${style.date} font-fira-code ml-60 self-center w-1/5`}>
                    <span className={`year-only-text`}>{article.date.split('-')[0]}</span>
                    <span> {"//"} </span>
                    <span className={`month-name-text`}>{article.date.split('-')[1]}</span>
                    <span> {"//"} </span>
                    <span className={`day-only-text`}>{article.date.split('-')[2]}</span>
                </div>
            </div>
    );

}
export default function ArticleCarosel({ articles }: ArticleCroselProps) {
    return (
        <>
            <div className={`carosel-box`}>
            {articles.map((article) => (
                <ArticleCard article={article} />
            ))}
            <h2 className="font-fira-code p-10">{"#read-more"}</h2>
            </div>
        </>
    );
}
