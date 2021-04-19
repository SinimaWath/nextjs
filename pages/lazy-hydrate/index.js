import React, {useEffect, useState} from "react";


const Long = () => {
    for(let i = 0; i < 1000; i++) {
        console.log(1);
    }
    return [...Array(10)].map(() => <div>Here</div>);
}

const WithoutHydration = ({children}) => {
    if (typeof window === "undefined") {
        return <div>{children}</div>
    }

    return <div dangerouslySetInnerHTML={{__html: ''}} suppressHydrationWarning/>
}


export class Hydrator extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        new IntersectionObserver(async ([entry], obs) => {
            if (!entry.isIntersecting) return;
            obs.unobserve(this.root);

            const { load, ...props } = this.props;
            const Child = interopDefault(await load());
            ReactDOM.hydrate(<Child {...props} />, this.root);
        }).observe(this.root);
    }

    render() {
        return (
            <section
                ref={c => this.root = c}
                dangerouslySetInnerHTML={{ __html: '' }}
                suppressHydrationWarning
            />
        );
    }
}

export default () => {
    return (
        <div>
            <LazyHydrate>
                <Long />
            </LazyHydrate>
        </div>
    )
}

export const getServerSideProps = (ctx) => {
    return {
        props: {
            query: ctx.query,
            fullHash: ctx.query.id+ '/' + ctx.query.hash,
        }
    }
}
