import {ChevronLeftIcon} from "@heroicons/react/24/outline";
import Container from "@ui/layouts/Container";
import { NextPageWithLayout } from "pages/_app";
import React, { ReactElement } from 'react'

type Props = {}

const Random: NextPageWithLayout = (props: Props) => {
  return (
    <div>
        <ChevronLeftIcon className="bg-gray-300 text-white rounded-full items-center h-8 p-2"/>
        <p className="font-Kanit text-primary text-4xl ">Random <br/> Restuarant</p>
        <a href="" className="bg-primary px-36 py-2 rounded-full text-2xl uppercase text-white font-Kanit">Random</a>

    </div>
  )
}

Random.getLayout = (page: ReactElement) => <Container>{page}</Container>;

export default Random
