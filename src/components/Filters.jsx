import { Form, useLoaderData, Link } from 'react-router-dom'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'
import { BsSearch } from 'react-icons/bs'
import { RiFilterFill } from 'react-icons/ri'
import { RiFilterLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params


  const [showFilter, setShowFilter] = useState(false)

  return (
    <Form>
      {/* Search */}

      <div className=" flex flex-row justify-center items-center">
        <input
          type="search"
          className=" mr-4 w-full sm:w-1/3 h-10 pl-4 border-primary border-2 rounded-full"
          placeholder="Search"
        />
        <button type="submit" className="btn btn-primary btn-sm">
          <BsSearch className="text-2xl" />
        </button>

        <button
          type="button"
          className="text-2xl text-primary ml-6 hover:bg-slate-300 w-10 h-10 rounded-full flex justify-center items-center"
          onClick={() => {
            setShowFilter(!showFilter)
          }}
        >
          {showFilter ?  <RiFilterFill />: <RiFilterLine />}
        </button>
      </div>

      <div
        className={`mt-12 bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2
        md:grid-cols-3 lg:grid-cols-4 items-center ${
          showFilter ? 'block' : 'hidden'
        }`}
      >
        {/* categories */}
        <FormSelect
          label="Select category"
          name="category"
          list={meta.categories}
          size="select-sm"
          defaultValue={category}
        />
        {/*  Company*/}
        <FormSelect
          label="Select brand"
          name="company"
          list={meta.companies}
          size="select-sm"
          defaultValue={company}
        />
        {/* Order */}
        <FormSelect
          label="Sort by"
          name="order"
          list={['a-z', 'z-a', 'high', 'low']}
          size="select-sm"
          defaultValue={order}
        />

        {/* price */}
        <FormRange
          name="price"
          label="select price"
          size="range-sm"
          price={price}
        />

        {/* shipping */}
        <FormCheckbox
          name="shipping"
          label="Free shipping"
          size="checkbox-sm"
          defaultValue={shipping}
        />
        {/* Button */}

        <button type="submit" className="btn btn-primary btn-sm">
          search
        </button>
        <Link to="/products" className="btn btn-accent btn-sm">
          {' '}
          reset
        </Link>
      </div>
    </Form>
  )
}

export default Filters

