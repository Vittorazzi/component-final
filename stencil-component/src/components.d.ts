/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SubTweetPanel {
        "subopts": { label: string, value: string}[];
    }
    interface TheComponent {
        "opts": {id:number, nomeOpt: string, descOpt: string, subOpts: [], hide: boolean}[];
        "tituloTag": string;
    }
    interface TweetContainer {
        "tweets": {id:number, nomeOpt: string, descOpt: string, subOpts: [], hide: boolean}[];
    }

    interface Iopts{
        id:number, 
        nomeOpt: string, 
        descOpt: string, 
        subOpts: IsubOpts[], 
        hide: boolean
    }

    interface IsubOpts{
        label: string,
        value: string
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSubTweetPanelElement extends Components.SubTweetPanel, HTMLStencilElement {
    }
    var HTMLSubTweetPanelElement: {
        prototype: HTMLSubTweetPanelElement;
        new (): HTMLSubTweetPanelElement;
    };
    interface HTMLTheComponentElement extends Components.TheComponent, HTMLStencilElement {
    }
    var HTMLTheComponentElement: {
        prototype: HTMLTheComponentElement;
        new (): HTMLTheComponentElement;
    };
    interface HTMLTweetContainerElement extends Components.TweetContainer, HTMLStencilElement {
    }
    var HTMLTweetContainerElement: {
        prototype: HTMLTweetContainerElement;
        new (): HTMLTweetContainerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sub-tweet-panel": HTMLSubTweetPanelElement;
        "the-component": HTMLTheComponentElement;
        "tweet-container": HTMLTweetContainerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SubTweetPanel {
        "subopts"?: { label: string, value: string}[];
    }
    interface TheComponent {
        "opts"?: {id:number, nomeOpt: string, descOpt: string, subOpts: [], hide: boolean}[];
        "tituloTag"?: string;
    }
    interface TweetContainer {
        "tweets"?: {id:number, nomeOpt: string, descOpt: string, subOpts: [], hide: boolean}[];
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sub-tweet-panel": SubTweetPanel;
        "the-component": TheComponent;
        "tweet-container": TweetContainer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sub-tweet-panel": LocalJSX.SubTweetPanel & JSXBase.HTMLAttributes<HTMLSubTweetPanelElement>;
            "the-component": LocalJSX.TheComponent & JSXBase.HTMLAttributes<HTMLTheComponentElement>;
            "tweet-container": LocalJSX.TweetContainer & JSXBase.HTMLAttributes<HTMLTweetContainerElement>;
        }
    }
}