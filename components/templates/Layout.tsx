import {Container} from '@material-ui/core';
import React, {FC, ReactNode} from 'react';
import Head from 'next/head';

type Props = {
  title: string
  children: NonNullable<ReactNode>
}

export const Layout: FC<Props> = (props: Props) => {
  return <Container>
    <Head>
      <title>{props.title}</title>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
    </Head>
    <header>Header</header>
    <main>
      {props.children}
    </main>
    <footer>Footer</footer>
  </Container>
}
