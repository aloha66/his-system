import React, { useState } from "react";
import axios from "axios";

export function useGet(url) {
  return useQuery(url, "get");
}

export function usePost(url) {
  return useQuery(url, "post");
}

function useQuery(url, type) {
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  async function fetch(params) {
    // 初始数据
    setLoading(true);
    setData({});
    setError(null);
    let query = axios[type];
    let paramsData = params;
    if (type == "get") {
      paramsData = { params };
    }
    let response = await query(url, paramsData).catch(function(error) {
      setLoading(false);
      setError(
        (error.response.data && error.response.data.message) || error.message
      );
      throw error;
    });
    setLoading(false);
    setData(response.data);
    if (response.data.status && response.data.status != 0) {
      setError(response.data.message);
      throw response.data.message;
    } else {
      return response.data;
    }
  }
  return [fetch, { data, loading, error, setError }];
}
